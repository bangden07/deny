# Deny Porto | Terminal Portfolio

Website portfolio berbasis terminal yang interaktif. Jelajahi proyek, skill, dan pengalaman saya melalui command-line interface.

🌐 **Live Demo**: [deny.biz.id](https://deny.biz.id)

## ✨ Fitur

- 🖥️ Terminal-style interface yang interaktif
- 🎨 Multiple themes (dark, light, blue-matrix, espresso, green-goblin, ubuntu)
- ⌨️ Autocomplete commands (Tab / Ctrl+i)
- 📜 Command history navigation (Arrow Up/Down)
- 📱 Responsive design untuk mobile
- 🚀 Loading animation seperti bash
- 💾 PWA ready - bisa di-install sebagai app

## 🛠️ Tech Stack

- **React** - UI Library
- **TypeScript** - Type Safety
- **Styled Components** - Styling
- **Vite** - Build Tool
- **PWA** - Progressive Web App

## 📋 Commands

| Command     | Deskripsi                       |
|-------------|--------------------------------|
| `help`      | Lihat daftar perintah          |
| `about`     | Tentang saya                   |
| `projects`  | Lihat proyek yang saya buat    |
| `education` | Latar belakang pendidikan      |
| `socials`   | Lihat akun sosial media        |
| `email`     | Kirim email ke saya            |
| `themes`    | Lihat tema yang tersedia       |
| `gui`       | Buka portfolio versi GUI       |
| `history`   | Lihat riwayat perintah         |
| `clear`     | Bersihkan terminal             |
| `welcome`   | Tampilkan halaman utama        |

## 🚀 Quick Start

```bash
# Clone repository
git clone https://github.com/bangden07/terminal-portfolio.git

# Masuk ke direktori
cd terminal-portfolio

# Install dependencies
npm install

# Jalankan development server
npm run dev

# Build untuk production
npm run build
```

## ⌨️ Keyboard Shortcuts

| Shortcut        | Aksi                           |
|-----------------|--------------------------------|
| `Tab`           | Autocomplete perintah          |
| `Ctrl + i`      | Autocomplete perintah          |
| `Arrow Up`      | Perintah sebelumnya            |
| `Arrow Down`    | Perintah selanjutnya           |
| `Ctrl + l`      | Bersihkan terminal             |

## 🎨 Themes

Ubah tema dengan perintah:
```
themes set <nama_tema>
```

Tema yang tersedia:
- `dark` - Default dark theme
- `light` - Light theme
- `blue-matrix` - Matrix style blue
- `espresso` - Warm espresso colors
- `green-goblin` - Green terminal style
- `ubuntu` - Ubuntu terminal colors

## 📝 Customization

Untuk mengustomisasi portfolio ini:

1. Edit informasi di `src/components/commands/About.tsx`
2. Update proyek di `src/components/commands/Projects.tsx`
3. Ubah social links di `src/components/commands/Socials.tsx`
4. Ubah pendidikan di `src/components/commands/Education.tsx`
5. Update email di `src/components/commands/Email.tsx`

## 📄 Lisensi

Proyek ini dilisensikan di bawah **MIT License dengan Attribution**.

Anda bebas menggunakan, memodifikasi, dan mendistribusikan proyek ini dengan syarat:
- Tetap mencantumkan kredit kepada pemilik asli: **© Bang Den**

Lihat file [LICENSE](LICENSE) untuk detail lengkap.

## 👨‍💻 Author

**Bang Den**
- Website: [deny.biz.id](https://deny.biz.id)
- GitHub: [@bangden07](https://github.com/bangden07)

---

⭐ Jika proyek ini bermanfaat, berikan star di repository ini!
