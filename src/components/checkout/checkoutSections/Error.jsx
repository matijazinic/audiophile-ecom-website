export default function Error({ message }) {
  return (
    <label role="alert" className="ml-auto text-red-500 text-sm">
      {message}
    </label>
  );
}
