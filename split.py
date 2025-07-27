import librosa as li
import soundfile as sf
import os


x, sr = li.load("source.aif", sr=None)

chunks = li.effects.split(x)
for i, c in enumerate(chunks):
    sf.write(
        os.path.join("assets", f"{i:03d}.wav"),
        x[c[0] : c[1]],
        samplerate=sr,
    )



x, sr = li.load("source2.aif", sr=None)

chunks = li.effects.split(x)
for i, c in enumerate(chunks):
    sf.write(
        os.path.join("assets", f"{i:03d}_2.wav"),
        x[c[0] : c[1]],
        samplerate=sr,
    )
