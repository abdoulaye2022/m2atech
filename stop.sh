#!/usr/bin/env bash
#
# stop.sh — arrête le frontend (:3000) et le backend (:8000) lancés par launch.sh

set -uo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
RUN_DIR="$ROOT/.run"

FRONT_PORT=3000
API_PORT=8000

info()  { printf "\033[0;36m›\033[0m %s\n" "$1"; }
ok()    { printf "\033[0;32m✓\033[0m %s\n" "$1"; }
warn()  { printf "\033[0;33m!\033[0m %s\n" "$1"; }

# Tue un process et ses enfants à partir d'un fichier PID
kill_pidfile() {
  local pidfile="$1" label="$2"
  if [ -f "$pidfile" ]; then
    local pid
    pid="$(cat "$pidfile")"
    if [ -n "$pid" ] && kill -0 "$pid" 2>/dev/null; then
      pkill -P "$pid" 2>/dev/null || true   # enfants (ex: next/node)
      kill "$pid" 2>/dev/null || true       # parent
      ok "$label arrêté (PID $pid)"
    fi
    rm -f "$pidfile"
  fi
}

# Tue tout process restant écoutant sur un port donné
kill_port() {
  local port="$1" label="$2" pids
  pids="$(lsof -ti tcp:"$port" 2>/dev/null || true)"
  if [ -n "$pids" ]; then
    # shellcheck disable=SC2086
    kill $pids 2>/dev/null || true
    sleep 1
    pids="$(lsof -ti tcp:"$port" 2>/dev/null || true)"
    if [ -n "$pids" ]; then
      # shellcheck disable=SC2086
      kill -9 $pids 2>/dev/null || true
    fi
    ok "$label libéré (port $port)"
  fi
}

info "Arrêt des serveurs…"

kill_pidfile "$RUN_DIR/app.pid" "Frontend"
kill_pidfile "$RUN_DIR/api.pid" "API"

# Filet de sécurité : tout ce qui reste sur les ports
kill_port "$FRONT_PORT" "Frontend"
kill_port "$API_PORT" "API"

ok "Terminé."
