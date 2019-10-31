import React, { useState, useRef } from 'react';

type MyFormProps = {
  onSubmit: (form: { name: string; description: string }) => void;
};

function MyForm({ onSubmit }: MyFormProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const [form, setform] = useState({
    name: '',
    description: ''
  });

  const { name, description } = form;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setform({
      ...form,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(form);
    setform({
      name: '',
      description: ''
    }); // 초기화
    if (inputRef.current) inputRef.current.focus();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={name} onChange={handleChange} ref={inputRef} />
      <input name="description" value={description} onChange={handleChange} />
      <button type="submit">등록</button>
    </form>
  );
}

export default MyForm;
