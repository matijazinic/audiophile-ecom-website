export default function Error({ message }) {
  console.log(message);
  return (
    <label role="alert" className="ml-auto text-red-500 text-sm">
      {message}
    </label>
  );
}
