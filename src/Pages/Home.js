import React from "react";
import Button from "../Components/Forms/Button";
import AddDate from "./AddDate";
import styles from "./Home.module.css";

const Home = () => {
  const apps = ["add_date"];
  const [currentApp, setCurrentApp] = React.useState(null);

  const loadApp = () => {
    switch (currentApp) {
      case "add_date":
        return <AddDate />;
      default:
        return null;
    }
  };

  const changeApp = (application) => {
    setCurrentApp(application);
  };

  React.useEffect(() => {
    changeApp("add_date");
  }, []);

  return (
    <section className={styles.appContainer}>
      <Button
        className={`${styles.changeApp} ${styles.left}`}
        disabled={apps.indexOf(currentApp) == 0}
      >
        {"<"}
      </Button>
      {loadApp()}
      <Button
        className={`${styles.changeApp} ${styles.right}`}
        disabled={apps.indexOf(currentApp) == apps.length - 1}
      >
        {">"}
      </Button>
    </section>
  );
};

export default Home;
