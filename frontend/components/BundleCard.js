export default function BundleCard({ bundle }) {
  return (
    <div style={{border:"1px solid #ccc",margin:10,padding:10}}>
      <h3>{bundle.name}</h3>
      <p>{bundle.description}</p>
      <strong>${bundle.weekend_price}</strong>
      <br/>
      <a href="/checkout">Book Now</a>
    </div>
  );
}
