import React, { useState } from 'react';
import cl from './styles/subscribeForm.module.scss';
import LabellessInput from './UI/LabellessInput';
import FilledButton from './UI/FilledButton';

const SubscribeForm = () => {
  const [value, setValue] = useState<string>('');

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(value);
  };

  return (
    <form className={cl.form} onSubmit={onSubmit}>
      <div className={cl.text}>
        <h2>Subscribe Newsletter</h2>
        <h3>The Travel</h3>
        <p>
          Get inspired! Receive travel discounts, tips and behind the scenes
          stories.
        </p>
      </div>
      <div className={cl.inputs}>
        <LabellessInput
          placeholder={'Your email address'}
          setValue={setValue}
          value={value}
        />
        <FilledButton
          text={'Subscribe'}
          clickHandler={() => ''}
          fillHeight={true}
        />
      </div>
    </form>
  );
};

export default SubscribeForm;
