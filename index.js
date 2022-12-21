const Button = (props) => {
  //  Write your code here.
  const { like } = props;
  return <button>{like}</button>;
};

const element = (
  //  Write your code here.
  <div className="container">
    <h1 className="heading">Social Buttons</h1>
    <div className="containerbut">
      <Button like="like" />
      <Button like="Comment" />
      <Button like="Share" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
