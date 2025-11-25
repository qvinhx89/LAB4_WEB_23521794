import { useTheme } from '../context/ThemeContext';

export default function ThemeButton() {
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  const label = theme === 'light' ? 'Bật chế độ tối' : 'Trở lại giao diện sáng';

  return (
    <button type="button" className="btn btn-primary" onClick={toggleTheme}>
      {label}
    </button>
  );
}
