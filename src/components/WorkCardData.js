import pro1 from "../assets/project1.png";
import pro2 from "../assets/project2.png";
import pro3 from "../assets/project3.png";

const codeNative = () => {
    window.open('https://drive.google.com/drive/folders/1hQ98OaGI7j2R4lzMjjiA-srjos7equ2H?usp=drive_link', '_blank');
  }
const viewNative= () => {
    window.open('https://drive.google.com/file/d/1YgxwprCqdQ70PhpXYdcTV0-3Yn-VYtsd/view?usp=drive_link', '_blank');
  }
const viewJS= () => {
    window.open('https://docs.google.com/presentation/d/1sdATFm8WMCSOuJMlNRQRvg_d8soQwEP5/edit?usp=drive_link&ouid=105429745890248182657&rtpof=true&sd=true', '_blank');
  }
const codeJS= () => {
    window.open('https://drive.google.com/drive/folders/1uBDqA5XYbX2QGIl0vy7BL4GA361PGqOK?usp=drive_link', '_blank');
  }
  
const ProjectCardData = [
	{
		imgsrc: pro1,
		title: "Replication Website The Sim4",
		text: "Project ini merupakan hasil kolaborasi saya bersama 2 teman saya yang juga mengikuti pelatihan di UT School. Pada pembuatan website ini kami menggunakan HTML dan juga CSS. Pada replikasi website ini kita kesulitan untuk mencari bahan terutama pada font karena tidak ada tersedia di google font.",
		view: "",
		code: ""
	},
	{
		imgsrc: pro2,
		title: "Social Media Website Design",
		text: "Project ini saya buat menggunakan framework react js, untuk backend menggunakan MongoDB. Untuk tampilan dari app ini mungkin hampir mirip dengan Facebook. Pada web app saya ini bisa digunakan untuk login/ register, bisa juga digunakan untuk melakukan posting/upload foto yang akan masuk pada halaman user lain jika sudah berteman.",
		view: onclick={viewJS},
		code: onclick={codeJS}
	},
	{
		imgsrc: pro3,
		title: "Social Media Mobile Design",
		text: "Project ini saya buat menggunakan framework react native, untuk backend saya menggunakan mongoDB. Untuk tampilan dari app ini mungkin hampir mirip dengan Instagram. Pada mobile app ini bisa digunakan untuk login/register, bisa melakukan follow/unfollow antar user, bisa digunakan untuk update profile pengguna, dan juga bisa digunakan untuk chat antar user.",
		view: onclick={viewNative},
		code: onclick={codeNative}
	},
	
	
];

export default ProjectCardData;