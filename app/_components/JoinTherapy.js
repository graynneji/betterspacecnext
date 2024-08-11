import styles from "./JoinTherapy.module.css";
import styless from "./BusinessOffer.module.css";

const JoinTherapy = () => {
  const items = [
    {
      name: "Flexible Schedule",
      text: "Control your own hours and find the right balance between your work and personal life. Set your availability to build a schedule that works for you.",
    },
    {
      name: "Hassle-Free Practice",
      text: "Our tools handle appointment scheduling, intake forms, and secure note-taking, allowing you to focus on what matters most – your clients.",
    },
    {
      name: "Impact lives",
      text: "Be part of a supportive community dedicated to destigmatizing mental health care and providing life-changing support.",
    },
    {
      name: "Rewarding Pay",
      text: "Earn a competitive rate that recognizes the value of your expertise, with opportunities for bonuses based on client satisfaction.",
    },
  ];
  return (
    <section className={styless.Features}>
      <div className={styles.TextContainer}>
        <h1 className={styless.Heading}>Why join betterspace?</h1>
      </div>
      <div className={styles.ContentWrapper}>
        <div className={styles.Rows}>
          <div className={styles.Solutions}>
            {items.map((item, index) => (
              <div className={styless.Feature} Feature key={index}>
                <div className={styless.Number}>{index + 1}</div>
                <h1 className={styless.Heading}>{item.name}</h1>
                <h1 className={styless.SupportingText}>{item.text}</h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default JoinTherapy;
