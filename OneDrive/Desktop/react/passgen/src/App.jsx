import { useState, useCallback, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify'; // Import ToastContainer and toast from react-toastify
import 'react-toastify/dist/ReactToastify.css'; // Import react-toastify CSS
import './App.css';

function App() {
  const [length, setLength] = useState(8);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSpecialChars, setIncludeSpecialChars] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordStrength, setPasswordStrength] = useState('weak');

  // Function to generate a password
  const passwordGenerator = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    if (includeNumbers) str += '1234567890';
    if (includeSpecialChars) str += '!@#$%^&*(){}[]<>?';

    for (let i = 0; i < length; i++) {
      const charIndex = Math.floor(Math.random() * str.length);
      pass += str.charAt(charIndex);
    }

    setPassword(pass);
    setPasswordStrength(calculatePasswordStrength(pass)); // Calculate password strength
  }, [length, includeNumbers, includeSpecialChars]);

  // Function to calculate password strength
  const calculatePasswordStrength = (password) => {
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecialChar = /[!@#$%^&*(){}\[\]<>?]/.test(password);

    if (password.length < 8) {
      return 'weak';
    } else if (hasUppercase && hasLowercase && hasNumber && hasSpecialChar) {
      return 'strong';
    } else if (hasUppercase || hasLowercase || hasNumber || hasSpecialChar) {
      return 'medium';
    } else {
      return 'weak';
    }
  };

  // Regenerate the password whenever dependencies change
  useEffect(() => {
    passwordGenerator();
  }, [passwordGenerator]);

  // Function to copy the password to the clipboard
  const copyPasswordToClipboard = useCallback(() => {
    if (password) {
      window.navigator.clipboard.writeText(password);
      toast.success('Password copied to clipboard!', {
        position: 'top-center',
        autoClose: 3000,
      });
    }
  }, [password]);

  return (
    <>
      <div className="text-6xl w-full max-w-md mx-auto shadow-md my-8 text-orange-500 bg-gray-700 rounded-lg px-4 text-center">
        Password Generator
      </div>

      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          className="outline-none w-full py-2 px-3 bg-gray-200"
          placeholder="Password"
          value={password}
          readOnly
          aria-label="Generated Password"
        />
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition-colors"
          onClick={copyPasswordToClipboard}
          aria-label="Copy Password"
        >
          Copy
        </button>
        <div className="px-2 text-gray-500">
          Strength: {passwordStrength}
        </div>
      </div>

      <div className="mt-4">
        <label className="block text-white mb-2">Select Length:</label>
        <input
          type="range"
          min="6"
          max="50"
          value={length}
          className="cursor-pointer"
          onChange={(e) => setLength(Number(e.target.value))}
        />
        <label className="text-white">Length: {length}</label>
      </div>

      <div className="flex items-center gap-2 mt-4">
        <input
          type="checkbox"
          id="numberInput"
          checked={includeNumbers}
          onChange={() => setIncludeNumbers((prev) => !prev)}
        />
        <label htmlFor="numberInput" className="text-white">
          Include Numbers
        </label>

        <input
          type="checkbox"
          id="specialCharsInput"
          checked={includeSpecialChars}
          onChange={() => setIncludeSpecialChars((prev) => !prev)}
        />
        <label htmlFor="specialCharsInput" className="text-white">
          Include Special Characters
        </label>
      </div>

      <ToastContainer /> {/* Toast container to display notifications */}
    </>
  );
}

export default App;
