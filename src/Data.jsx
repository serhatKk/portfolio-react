import Project1 from './assets/project1.jpeg';
import Project2 from './assets/project2.jpeg';
import Project3 from './assets/project3.jpeg';
import Project4 from './assets/project4.jpeg';
import Project5 from './assets/project5.jpeg';
import Project6 from './assets/project6.jpeg';
import Project7 from './assets/project7.jpeg';

import Testimonial1 from './assets/testimonial1.jpg';
import Testimonial2 from './assets/testimonial2.jpg';
import Testimonial3 from './assets/testimonial3.jpg';
import Testimonial4 from './assets/testimonial4.jpg';
import Testimonial5 from './assets/testimonial5.jpg';

export const links = [
  {
    name: 'Home',
    path: 'home',
  },
  {
    name: 'Services',
    path: 'services',
  },
  {
    name: 'Skills',
    path: 'skills',
  },
  {
    name: 'Works',
    path: 'work',
  },
  {
    name: 'Resume',
    path: 'resume',
  },
  {
    name: 'Testimonials',
    path: 'testimonial',
  },
  {
    name: 'Pricing',
    path: 'pricing',
  },
  {
    name: 'Blog',
    path: 'blog',
  },
  {
    name: 'Contact',
    path: 'contact',
  },
];

export const services = [
  {
    id: 1,
    name: '.Net Windows Forms ',
    title: 'Desktop Applications',
    description:
    "While creating applications using Windows Forms, I also design unique and compelling user interfaces that are user-friendly and functional" },
  {
    id: 2,
    name: 'Bot Yazılımı',
    title: 'Python ile Bot Geliştirme',
    description:
    "Windows Forms kullanarak uygulamalar oluştururken, aynı zamanda kullanıcı dostu ve işlevsel benzersiz ve etkileyici kullanıcı arayüzleri tasarlarım."
  },
  {
    id: 3,
    name: ' Oyun Yapımı ',
    title: ' Unity 2D/3D Oyun Geliştirme ',
    description:
    "Oyunlar oluşturuyorum ve bir oyunun tasarımını, geliştirilmesini ve piyasaya sürülmesini açıklıyorum. Benzersiz mobil Android ve iOS oyunları geliştiriyorum." },
  {
    id: 4,
    name: ' Web Siteleri',
    title: 'Web Sayfaları Geliştirme',
    description:
      ' Benzersiz, kullanıcı dostu ve etkileyici web siteleri tasarlıyor, işlevselliği ön planda tutuyorum.',
  },
  {
    id: 5,
    name: ' Yapay Zeka ',
    title: ' Ses ve Görsellik ',
    description:
      'Profesyonel bir yaklaşımla yapay zeka kullanarak seslerin dönüşümünü ve çeşitli görsel içeriklerin hazırlanmasını gerçekleştiriyorum.',
  },
];

export const skills = [
  {
    id: 1,
    name: 'Python',
    percentage: 90,
    description:
      ' ',
  },

  {
    id: 2,
    name: 'C#',
    percentage: 80,
    description:
      ' ',
  },
  {
    id: 3,
    name: 'Unity',
    percentage: 80,
    description:
      ' ',
  },


  {
    id: 4,
    name: 'React',
    percentage: 60,
    description:
      ' ',
  },
  {
    id: 5,
    name: 'Java',
    percentage: 65,
    description:
      ' ',
  },
  {
    id: 6,
    name: 'MySqL',
    percentage: 90,
    description:
      ' ',
  },
];

export const projects = [
  {
    id: 1,
    img: Project1,
    category: 'Desktop App',
    title: 'The Mechanic',
    description:
    'Aracınızı tamirhaneye götürmeden bakım/tamir işlemlerini yaptırıp tamirin her aşamasını uygulama üzerinden kontrol edebileceğiniz Masaüstü Uygulaması'  
  },
  {
    id: 2,
    img: Project2,
    category: 'Game',
    title: 'GunFight Simulator',
    description:
      'Bu proje bir FPS (Birinci Şahıs Nişancı) oyun projesidir. Oyuncuya özgür ve kaliteli  oynanış sunan bu projede, birbirinden çeşitli mekanikler mevcuttur.',
  },
  {
    id: 3,
    img: Project3,
    category: 'Bot',
    title: 'Telegram Duyuru Botu',
    description:
      'Telegram için gönderdiğiniz ürün linkini ekli olduğu kanallarda duyuru olarak mesaj ve ürün linkini kullanıclarla paylaşan bot',
  },
  {
    id: 4,
    img: Project4,
    category: 'Bot',
    title: 'Instagram Unfollow Botu',
    description:
      'Python Selenium kütüphanesi kullanarak instagrama login ve  geri takip etmeyen kullanıcıları gösterip ,geri takipten çıkmanızı sağlayan bot',
  },
  {
    id: 5,
    img: Project5,
    category: 'Website',
    title: 'SeroFlix',
    description:
      'Dizi ve Filmlerin izleyiciler tarafından değerlendirilip yorum yapabildiği ve admin olarak site kontrolü yapılan Full-Stack bir web sitesi',
  },
  {
    id: 6,
    img: Project6,
    category: 'Website',
    title: 'Portfolio',
    description:
      'Şuanda içinde bulunmuş olduğunuz Web Sitesi :))',
  },
  {
    id: 7,
    img: Project7,
    category: 'Game',
    title: 'Dark Side of Cages',
    description:
      'Unity Engine ve C# kullanılarak, düşmanları temizleyip ve gerekli malzemeleri toplayarak bölümleri geçtiğiniz 2d Platform oyunu.',
  },
];

export const cv = [
  {
    id: 1,
    title: 'Dumlupınar Üniversitesi',
    subtitle: 'Bilgisayar Mühendisliği',
    date: '2019 - 2024',
    description:
      'Ortalama : 3.16',
    category: 'education',
  },


 

  {
    id: 2,
    title: 'Uşak Valiliği',
    subtitle: 'Stajyer',
    date: '2023 Temmuz- 2023 Ağustos',
    description:
    '• - Güvenlik Duvarı Hakkında Bilgi • - Veri Analizleri •- Veritabanı SqL Çalışmaları ',
    category: 'experience',
  },

  {
    id: 3,
    title: 'MarkaPress',
    subtitle: 'Stajyer',
    date: '2023 Mayıs- 2023 Temmuz',
    description:
    '• - Full-Stack Web Geliştirme(Html/CSS/React/Node.js • - Müşteri İlişkileri',
    category: 'experience',
  },
];

export const testimonials = [
  {
    id: 1,
    img: Testimonial1,
    name: 'Barbara Wilson',
    author: 'CEO Company',
    description:
      ' ',
  },
  {
    id: 2,
    img: Testimonial2,
    name: 'Charlie Smith',
    author: 'Designer',
    description:
      ' ',
  },
  {
    id: 3,
    img: Testimonial3,
    name: 'Roy Wang',
    author: 'Manager GYM',
    description:
      ' ',
  },
  {
    id: 4,
    img: Testimonial4,
    name: 'Jennifer Smith',
    author: 'CEO & Founder',
    description:
      ' ',
  },
  {
    id: 5,
    img: Testimonial5,
    name: 'Paul Freeman',
    author: 'Photographer',
    description:
      ' ',
  },
];
