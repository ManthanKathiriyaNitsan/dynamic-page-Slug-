type HeroProps = {
    title: string;
    subtitle: string;
  };
  
  export default function Hero2({ title, subtitle }: HeroProps) {
    return (
      <section style={{ padding: "40px", background: "red" }}>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </section>
    );
  }
  