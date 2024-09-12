import { useCallback, useEffect, useState } from 'react';
import './App.css';

function App() {
  const [length, setLength] = useState(8);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSpecialChars, setIncludeSpecialChars] = useState(false);
  const [password, setPassword] = useState('');

  // Function to generate a password
  const passwordGenerator = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    if (includeNumbers) str += '123456789';
    if (includeSpecialChars) str += '!@#$%^&*(){}';

    for (let i = 0; i < length; i++) {
      const charIndex = Math.floor(Math.random() * str.length);
      pass += str.charAt(charIndex);
    }

    setPassword(pass);
  }, [length, includeNumbers, includeSpecialChars]);

  // useEffect to regenerate the password whenever dependencies change
  useEffect(() => {
    passwordGenerator();
  }, [passwordGenerator]);

  return (
    <>
      <div className="text-6xl w-full max-w-md mx-auto shadow-md my-8 text-orange-500 bg-gray-700 rounded-lg px-4">
        Password Generator
      </div>

      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          className="outline-none w-full py-1 px-3"
          placeholder="Password"
          value={password}
          readOnly
        />
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
          onChange={() => setIncludeNumbers(prev => !prev)}
        />
        <label htmlFor="numberInput" className="text-white">Include Numbers</label>

        <input
          type="checkbox"
          id="specialCharsInput"
          checked={includeSpecialChars}
          onChange={() => setIncludeSpecialChars(prev => !prev)}
        />
        <label htmlFor="specialCharsInput" className="text-white">Include Special Characters</label>
      </div>
    </>
  );
}

export default App;
