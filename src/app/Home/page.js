"use client"
import Head from 'next/head';
import styles from '../componentsCss/Home.css'
import Link from 'next/link';
export default function Home() {

  

  return (
    <>

      <header className={styles.header}>
        <div className={styles.logo}>
          <h1>IFeed Delivery</h1>
        </div>
            
        <nav>
          <ul className={styles.navList}>
            <li><a href="#services">Serviços</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#contact">Contato</a></li>
            <li><Link href="/StatusPedidos">Veja seu pedido</Link></li>
            <li><Link href="/Login">faça login</Link></li>
          </ul>
        </nav>
      </header>

      <section id="hero" className={styles.hero}>
        <div className={styles.heroContent}>
          <h2>Entrega rápida e saborosa</h2>
          <p>Peça sua refeição favorita e receba na porta de sua casa!</p>
          <a href="#menu" className={styles.ctaBtn}>Veja nosso menu</a>
        </div>
      </section>

      <section id="services" className={styles.services}>
        <h2>O que oferecemos</h2>
        <div className={styles.service}>
          <h3>Entrega Rápida</h3>
          <p>Receba sua comida em até 30 minutos.</p>
        </div>
        <div className={styles.service}>
          <h3>Variedade no Menu</h3>
          <p>Escolha entre uma grande variedade de pratos.</p>
        </div>
        <div className={styles.service}>
          <h3>Comida Fresca</h3>
          <p>Comidas preparadas com ingredientes frescos e de qualidade.</p>
        </div>
      </section>

      <section id="menu" className={styles.menu}>
        <h2>Nosso Menu</h2>
        <p>Veja algumas das nossas opções populares.</p>
        <div className={styles.menuItem}>
          <img src="/pizza.jpg" alt="Pizza Margherita" />
          <h3>Pizza Margherita</h3>
          <p>Uma deliciosa pizza de queijo e tomate fresco.</p>
        </div>
        <div className={styles.menuItem}>
          <img src="/burger.jpg" alt="Hambúrguer Clássico" />
          <h3>Hambúrguer Clássico</h3>
          <p>Carne suculenta, queijo e molhos especiais.</p>
        </div>
      </section>

      <section id="contact" className={styles.contact}>
        <h2>Entre em Contato</h2>
        <p>Se tiver alguma dúvida, entre em contato conosco.</p>
        <a href="mailto:contato@fooddelivery.com" className={styles.ctaBtn}>Email para Contato</a>
      </section>

      <footer className={styles.footer}>
        <p>&copy; 2024 Food Delivery - Todos os direitos reservados.</p>
      </footer>
    </>
  );
}
