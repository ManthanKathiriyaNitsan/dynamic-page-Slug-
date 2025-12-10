type TextProps = {
    heading: string;
    content: string;
  };
  
  export default function TextSection({ heading, content }: TextProps) {
    return (
      <section style={{ padding: "20px" }}>
        <h2>{heading}</h2>
        <p>{content}</p>
      </section>
    );
  }
  