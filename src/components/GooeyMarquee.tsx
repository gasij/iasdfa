import "./GooeyMarquee.css";

interface GooeyMarqueeProps {
  text: string;
  className?: string;
}

export const GooeyMarquee = ({ text, className = "" }: GooeyMarqueeProps) => {
  return (
    <div className={`marquee ${className}`}>
      <div className="marquee_blur" aria-hidden="true">
        <p className="marquee_text">{text}</p>
      </div>
      <div className="marquee_clear">
        <p className="marquee_text">{text}</p>
      </div>
    </div>
  );
};

