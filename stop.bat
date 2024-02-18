@echo off

taskkill /F /FI "WindowTitle eq run-yolo*"
timeout 1
taskkill /F /FI "WindowTitle eq run-yolo*"