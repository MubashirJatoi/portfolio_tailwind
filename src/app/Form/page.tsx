"use client"
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';



function Form () {
    const [state, handleSubmit] = useForm("xdkgrowo");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
    return (
        <div className="Contactme mt-[96px] px-4 sm:px-6 lg:px-8">
            <div className="casas">
                <h1 className="text-[#FEFEFE] text-[25px] sm:text-[32px] md:text-[40px] font-[700] text-center mb-[10px]">Contact me</h1>
                <p className="text-[#707070] mt-[-5px] text-[12px] sm:text-[16px] md:text-[20px] text-center">Cultivating Connections: Reach Out and Connect with Me</p>
            </div>
            <div className="form">
                <form onSubmit={handleSubmit} className="w-full max-w-[1012px] text-[#959595] h-auto mt-[30px] sm:mt-[50px] mx-auto">
                    <div className="input11 flex flex-col md:flex-row gap-[30px] mb-[30px]">
                        <input className="bg-[#1B1B1B] border-[#1B1B1B] text-[#959595] w-full md:w-[491px] h-[54px] rounded-[8px] p-[20px]" id="text" type="name" name="name" placeholder="Name" />
                        <ValidationError 
        prefix="Name" 
        field="name"
        errors={state.errors}
      />
                        <input className="bg-[#1B1B1B] border-[#1B1B1B] text-[#959595] w-full md:w-[491px] h-[54px] rounded-[8px] p-[20px]" type="email" id="email" name="email" placeholder="Email" />
                        <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
                    </div>
                    <div className="input11 flex flex-col md:flex-row gap-[30px] mb-[30px]">
                        <div className="input11 flex flex-col gap-[30px] md:mb-[30px]">
                            <input className="bg-[#1B1B1B] border-[#1B1B1B] text-[#959595] w-full md:w-[491px] h-[54px] rounded-[8px] p-[20px]" type="number" name="age" id="age" placeholder="age" />
                            <ValidationError 
        prefix="Age" 
        field="age"
        errors={state.errors}
      />
                            <input className="numm bg-[#1B1B1B] border-[#1B1B1B] text-[#959595] w-full md:w-[491px] h-[54px] rounded-[8px] p-[20px]" type="tel" name="number" id="number" placeholder="Phone Number" />
                            <ValidationError 
        prefix="Number" 
        field="number"
        errors={state.errors}
      />
                        </div>
                        <textarea className="bg-[#1B1B1B] border-[#1B1B1B] text-[#959595] w-full md:w-[491px] h-[140px] rounded-[8px] p-[20px]" rows={10} cols={20} id="message" name="message" placeholder="Project Details..."></textarea>
                        <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
                    </div>
                    <div className="unlimited flex justify-end">
                        <button type="submit" disabled={state.submitting} className="border-2 border-solid border-[#959595] w-[127px] h-[48px] text-[#959595] text-[20px] rounded-[8px] cursor-pointer hover:bg-[#E46400] hover:border-[#E46400] hover:text-[#FFFFFF] hover:cursor-pointer">Send</button>
                    </div>
                </form>

            </div>
        </div>
    );
}

export default Form;
