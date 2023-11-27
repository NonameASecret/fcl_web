import React from 'react';

interface BatchFormProps {
  onSubmit: (data: { model: string; quantity: number; licenseLevel: number; comment: string ,date : string}) => void;
}


const BatchForm: React.FC<BatchFormProps> = ({ onSubmit }) => {


  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // get the values from the form
    const model = (document.getElementById('model') as HTMLInputElement).value;
    const date = (document.getElementById('date') as HTMLInputElement).value;
    const quantity = (document.getElementById('quantity') as HTMLInputElement).value;
    const licenseLevel = (document.getElementById('license') as HTMLInputElement).value;
    const comment = (document.getElementById('comment') as HTMLInputElement).value;

    (document.getElementById('model') as HTMLInputElement).value = '';
    (document.getElementById('date') as HTMLInputElement).value = '';
    (document.getElementById('license') as HTMLInputElement).value = '';
    (document.getElementById('quantity') as HTMLInputElement).value = '';
    (document.getElementById('comment') as HTMLInputElement).value = '';


    // call the callback function passed to the component
    onSubmit({ model, quantity: parseInt(quantity), licenseLevel: parseInt(licenseLevel), comment ,date});

  };
  return (
    <div className="bg-[#1f1f1f] min-h-screen flex flex-col">
      
      <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-xs mx-auto space-y-8 rounded-md">
          <form className="border border-[#6e5534] mt-8 space-y-6 p-6 rounded-lg pt-10 pl-10 pr-10 pb-10" onSubmit={handleSubmit}>
            <div className="flex justify-left">
              <h2 className="text-white text-2xl font-semibold">Batch Form</h2>
            </div>
            <div className="mb-4">
              <select 
                required
                id="model" 
                className="bg-white text-black rounded w-full py-2 px-4 leading-tight"
              >
                <option value="">Model</option>
                <option value="Model 1">Model 1</option>
                <option value="Model 2">Model 2</option>
                <option value="Model 3">Model 3</option>
              </select>
            </div>
            <div className="mb-4">
              <input 
                required
                type="date" 
                id="date" 
                className="bg-white text-black rounded w-full py-2 px-4" 
              />
            </div>
            <div className="mb-4">
              <input 
                required
                type="number" 
                placeholder='Quantity'
                id="quantity" 
                className="bg-white text-black rounded w-full py-2 px-4" 
              />
            </div>
            <div className="mb-4">
              <select 
                required
                id="license" 
                className="bg-white text-black rounded w-full py-2 px-4 leading-tight"
              >
                <option value="">License Level</option>
                {
                  Array.from({ length: 10 }, (_, i) => i).map((level) => (
                    <option key={level} value={level}>{level}</option>
                  )) 
                }
              </select>
            </div>
            <div className="mb-6">
              <textarea 
                id="comment" 
                rows={1}
                className="bg-white text-black rounded w-full py-2 px-4" 
                placeholder="Comment (Not Required)"
              />
            </div>
            <div className="bg-[#6e5534] rounded flex justify-center">
              <button 
                type="submit" 
                className="bg-brown-600 hover:bg-brown-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default BatchForm;