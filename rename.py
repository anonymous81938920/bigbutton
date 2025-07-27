import pathlib
import os
files = pathlib.Path("assets").glob("*.aif")


for i, path in enumerate(files):
    os.system(f"mv \"{path}\" {os.path.dirname(path)}/{i}.aif")