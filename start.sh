#!/bin/sh
cd /Users/bretthevers/Documents/tallo-website
exec npx next dev --port "${PORT:-3003}"
