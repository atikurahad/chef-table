export default function Meal({ meal }) {
  const { title, img, price, description } = meal;
  return (
    <div>
      
      <div className="card bg-base-100 w-96 h-96 shadow-xl border-y-teal-200 my-6">
        <figure>
          <img className="w-full" src={img} alt={title} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">${price}</button>
          </div>
        </div>
      </div>
    </div>
  );
}
