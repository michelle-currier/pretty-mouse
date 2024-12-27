export default function Navbar() {
  return (
    <nav className="flex justify-end">
      <ul className="flex space-x-4 m-6 font-semibold">
        <li>
          <a href="/trail">trail mouse</a>
        </li>
        <li>
          <a href="/magnetize">magnetize mouse</a>
        </li>
        <li>
          <a href="/draw">draw mouse</a>
        </li>
      </ul>
    </nav>
  );
}
