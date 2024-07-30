function Item({ name, isPacked }) {
  if (isPacked) {
    return null;
  }
  return <li className="item">{name}</li>;
}

export default function PackingList() {
  return (
    <section>
      <h1>John 的出門清單</h1>
      <ul>
        <Item 
          isPacked={true} 
          name="手機" 
        />
        <Item 
          isPacked={true} 
          name="錢包" 
        />
        <Item 
          isPacked={false} 
          name="鑰匙" 
        />
      </ul>
    </section>
  );
}