import { Globe3D } from "../ui/globe";

export const hobbySkill = [
  {
    title: 'membaca komik',
    description: 'ya terkadang aku suka mengisi waktu luang ku dengan membaca komik seperti manga atau manhua',
    img: '/manga.jpg',
    className: 'md:col-span-1'
  },
  {
    title: 'Music',
    description: 'Aku juga suka mendengarkan music entah itu saat belajar, mengerjakan tugas ataupun saat bermain game',
    img: '/music.jpg',
    className: 'md:col-span-1'
  },
  {
    title: 'Gaming',
    description: 'Saat semua tugas ku selesai atau weekend aku juga suka bermain game storry telling, seperti hsr atau genshin',
    img: '/haseer.png',
    className: 'md:col-span-1'
  },
  {
    title: 'Menggambar',
    description: 'yahh aku juga punya pengalaman saat menggambar soalnya pernah juara meskipun masih tingkat sekolah sih',
    img: '/pg.jpg',
    className: 'md:col-span-2'
  },
  {
    title: 'Coding',
    description: 'Coding juga bisa di bilang keahlianku tapi tidak jago jago banget sih, saat ini juga masih mendalami tentang perkodingan',
    img: '/coding.jpg',
    className: 'md:col-span-1'
  },
  {
  title: 'Language',
  description: 'Untuk sekarang aku masih bisa 2 bahasa yaitu bahasa Indonesia dan bahasa Ingris, bisa dibilang dalam bahasa Inggris aku lumayan mahir dalam pengucapan dan pengartian',
  className: 'md:col-span-1',
  renderContent: (
    <Globe3D
      markers={[
        {
          lat: -6.2,
          lng: 106.8,
          src: "/ind.png",
          label: "Indonesia",
        },
        {
          lat: 51.5,
          lng: -0.1,
          src: "/uk.png",
          label: "English",
        },
      ]}
      config={{
        autoRotateSpeed: 0.5,
        enableZoom: false,
      }}
      className="h-90 w-100"
    />
  )
},
{
  title: 'Management Waktu',
    description: 'Aku juga bisa mengatur waktu yaa misalnya katak waktunya belajar ya belajar mengerjakan tugas yaa nugas, dan semua punya waktunya sendiri sih kalo menurutku',
      img: '/anime.png',
        className: 'md:col-span-2'
},
]

export const WorkSpace = [
  {
    title: "Honkai Impact 3RD clone",
    description: "Sebuah website yang aku buat untuk pembelajaran web clonning yang terinspirasi dari web Honkai Impact 3RD",
    github: "https://github.com/Huove/Honkai-impact3rd-clone",
    demo: "https://musical-donut-543b06.netlify.app/",
  },
  {
    title: "HI3 Index",
    description: "Website CRUD yang isinya cuma chara dan equipment dari HI3 yang kubuat cuma buat seneng senengan aja sih",
    github: "https://github.com/Huove/HI3-index.git",
    demo: "https://honkai3rd-index.netlify.app/",
  },
  {
    title: "Dimsum Wrap",
    description: "Website Ecommerce dengan tampilan minimalis dan mudah untuk digunakan dari segi user dan admin",
    github: "https://github.com/Huove/Dimsum.git",
    demo: "https://dimsum-production-3850.up.railway.app/",
  },
  {
    title: "Portofolio",
    description: "Website portofolio yang ku buat secara pribadi",
    github: "https://github.com/Huove/NextJS_Portfolio.git",
    demo: "https://portofoliotakano.netlify.app/",
  },
];

export const techStack = [
  {
    id: 1,
    name: "React",
    image: "/react_1.jpg"
  },
  {
    id: 2,
    name: "Next.js",
    image: "/nextjs.jpg"
  },
  {
    id: 3,
    name: "Flutter",
    image: "/flutter.webp"
  },
  {
    id: 4,
    name: "Node.js",
    image: "/nodes.jpg"
  },
  {
    id: 5,
    name: "TailwindCSS",
    image: "/tailwind_1.png"
  },
  {
    id: 6,
    name: "JavaScript",
    image: "/Java.png"
  },
  {
    id: 7,
    name: "HTML",
    image: "/html.png"
  },
  {
    id: 8,
    name: "CSS",
    image: "/css.png"
  },
];