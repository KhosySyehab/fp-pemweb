# Asset Management Guide

## Struktur Folder Assets

```
src/assets/
├── questions/          # Tempat menyimpan gambar soal
│   ├── q1.jpg
│   ├── q2.jpg
│   ├── q3.jpg
│   └── ...
└── audio/             # Tempat menyimpan file audio soal
    ├── q1.mp3
    ├── q2.mp3
    ├── q3.mp3
    └── ...
```

## Cara Mengganti Asset dari Internet ke Local

### Step 1: Download Asset
1. Download gambar dan audio dari internet
2. Simpan di folder sesuai struktur di atas

### Step 2: Update Quiz Data
Edit file `src/data/quizzes.js` dan ubah path dari URL ke path lokal:

**Sebelum (dari internet):**
```javascript
{
  id: 1,
  question: "What do you feel when your friend is sad?",
  image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=300&fit=crop",
  audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
  // ...
}
```

**Sesudah (dari lokal):**
```javascript
import q1Image from '../assets/questions/q1.jpg';
import q1Audio from '../assets/audio/q1.mp3';

{
  id: 1,
  question: "What do you feel when your friend is sad?",
  image: q1Image,
  audio: q1Audio,
  // ...
}
```

## Format File yang Didukung

### Gambar
- `.jpg` / `.jpeg`
- `.png`
- `.webp`

### Audio
- `.mp3`
- `.wav`
- `.ogg`
- `.m4a`

## Catatan Penting

- Pastikan ukuran file tidak terlalu besar (gambar: max 500KB, audio: max 5MB)
- Gunakan format yang sudah dikompresi untuk performa lebih baik
- Nama file harus deskriptif (contoh: `question_1.jpg` bukan `img1.jpg`)
