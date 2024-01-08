function CounterFooter({ count }) {
  return <div>{count % 2 === 1 ? "tek" : "çift"}</div>;
}

export default CounterFooter;
