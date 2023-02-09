import Header from "./Header";

const Footer = () => {
  return (
    <footer>
      <small>@ Arya development. All rights reserved</small>
    </footer>
  );
};

const MainComponent = () => {
  return (
    <div>
      <h1>Reasons I'm excited to learn React </h1>
      <ol>
        <li>Highly usable </li>
        <li>Learner friendly </li>
        <li>
          It's popular library , so i will be able to fit in with the cool
          developers
        </li>
      </ol>
    </div>
  );
};

const ReasonForReact = () => {
  return (
    <div padding-left="30px">
      <h2>
        <Header />
        <MainComponent />
      </h2>
      <Footer />
    </div>
  );
};

ReactDOM.render(<ReasonForReact />, document.getElementById("root"));
