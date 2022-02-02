export default function DetailCard({ hyruleEntry }) {
  const { image, name, description, common_locations, id } = hyruleEntry;
  return (
    <div>
      <h1>{name}</h1>
      <img src={image} />
      <p>{description}</p>
      {common_locations?.map((item) => (
        <p key={item}>{item}</p>
      ))}
    </div>
  );
}
