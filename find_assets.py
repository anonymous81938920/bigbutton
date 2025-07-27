import pathlib

files = pathlib.Path(".").rglob("*.mp3")

print(list(map(str, files)))