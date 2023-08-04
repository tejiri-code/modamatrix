// src/components/ProductCustomization.js
import React, { useState } from 'react';

const ProductCustomization = () => {
  // State variables to track user selections
  const [selectedProduct, setSelectedProduct] = useState(null); // Step 1: Product Selection
  const [selectedColor, setSelectedColor] = useState('red');
  const [selectedSize, setSelectedSize] = useState('medium');
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [customText, setCustomText] = useState(''); // Step 4: Text and Image Editing
  const [customImage, setCustomImage] = useState(null); // Step 4: Text and Image Editing
  const [designElements, setDesignElements] = useState([]); // Step 5: Interactive Design Area

  // Handlers for updating selections
  const handleProductSelect = (product) => {
    setSelectedProduct(product);
    // Reset other selections when a new product is selected
    setSelectedColor('red');
    setSelectedSize('medium');
    setSelectedOptions([]);
    setCustomText('');
    setCustomImage(null);
    setDesignElements([]);
  };

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  const handleOptionToggle = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  // Simulated product preview based on selections
  const productPreview = (
    <div className={`bg-${selectedColor}-300 p-8 rounded-md text-center`}>
      <p className="text-lg font-semibold">Product Preview</p>
      <p className="text-sm text-gray-600">
        Color: {selectedColor} | Size: {selectedSize}
      </p>
      {customText && <p>{customText}</p>}
      {customImage && (
        <img
          src={URL.createObjectURL(customImage)}
          alt="Customization"
          className="max-h-32 mt-2"
        />
      )}
      {designElements.map((element, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            top: element.position.y,
            left: element.position.x,
            transform: `rotate(${element.rotation}deg)`,
          }}
        >
          {element.type === 'text' ? (
            <p style={{ color: element.color, fontSize: element.fontSize }}>
              {element.content}
            </p>
          ) : (
            <img
              src={element.imageURL}
              alt="Custom Element"
              style={{ width: element.width, height: element.height }}
            />
          )}
        </div>
      ))}
      <ul className="list-disc text-left mt-2">
        {selectedOptions.map((option, index) => (
          <li key={index}>{option}</li>
        ))}
      </ul>
    </div>
  );

  // Step 5: Interactive Design Area
  const handleTextChange = (e) => {
    setCustomText(e.target.value);
  };

  const handleImageUpload = (e) => {
    const imageFile = e.target.files[0];
    if (imageFile) {
      setCustomImage(imageFile);
    }
  };

  const handleDesignElementAdd = (type) => {
    setDesignElements([
      ...designElements,
      {
        type,
        content: type === 'text' ? customText : '',
        imageURL: type === 'image' ? URL.createObjectURL(customImage) : '',
        position: { x: 0, y: 0 },
        rotation: 0,
        fontSize: '16px',
        color: 'black',
        width: '100px',
        height: '100px',
      },
    ]);
  };

  const handleDragEnd = (e, index) => {
    const updatedElements = [...designElements];
    const element = updatedElements[index];
    const boundingRect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - boundingRect.left;
    const y = e.clientY - boundingRect.top;
    element.position = { x, y };
    setDesignElements(updatedElements);
  };
  // Step 6: Customization Summary
  const totalCost = 10 + selectedOptions.length * 5 + designElements.length * 2;

  // Step 7: Add to Cart
  const handleAddToCart = () => {
    // Implement adding the customized product to the cart
  };

  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="w-full max-w-md p-4 bg-white rounded shadow-md">
        <h1 className="text-2xl font-semibold mb-2">ModaMatrix</h1>
        <p className="text-gray-600 mb-4">Design, Pick, Preview</p>

        {/* Step 1: Product Selection */}
        {selectedProduct ? (
          <div>
            {/* Step 2: Customization Options */}
            {/* Color selection */}
            <div className="mb-4">
              <h3 className="font-semibold">Select Color:</h3>
              <div className="flex space-x-2">
                <button
                  onClick={() => handleColorChange('red')}
                  className={`w-8 h-8 rounded-full bg-red-500 ${
                    selectedColor === 'red' ? 'border-2 border-blue-500' : ''
                  }`}
                />
                <button
                  onClick={() => handleColorChange('blue')}
                  className={`w-8 h-8 rounded-full bg-blue-500 ${
                    selectedColor === 'blue' ? 'border-2 border-blue-500' : ''
                  }`}
                />
                {/* Add more color options here */}
              </div>
            </div>

            {/* Size selection */}
            <div className="mb-4">
              <h3 className="font-semibold">Select Size:</h3>
              <select
                value={selectedSize}
                onChange={(e) => handleSizeChange(e.target.value)}
                className="block w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              >
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
              </select>
            </div>

            {/* Option selection */}
            <div className="mb-4">
              <h3 className="font-semibold">Select Options:</h3>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  value="Option 1"
                  checked={selectedOptions.includes('Option 1')}
                  onChange={() => handleOptionToggle('Option 1')}
                />
                Option 1
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  value="Option 2"
                  checked={selectedOptions.includes('Option 2')}
                  onChange={() => handleOptionToggle('Option 2')}
                />
                Option 2
              </label>
              {/* Add more option checkboxes here */}
            </div>

  {/* Step 4: Text and Image Editing */}
  <div className="mb-4">
          <h3 className="font-semibold">Add Text:</h3>
          <input
            type="text"
            value={customText}
            onChange={handleTextChange}
            className="block w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <h3 className="font-semibold">Upload Image:</h3>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="block w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        </div>

             {/* Step 5: Interactive Design Area */}
             <div className="mb-4">
              <h3 className="font-semibold">Interactive Design Area:</h3>
              <div
                className="bg-gray-200 p-4  relative"
                style={{ maxWidth: '100%' }}
              >
                {productPreview}
                {designElements.map((element, index) => (
                  <div
                    key={index}
                    draggable
                    onDrag={(e) => e.preventDefault()}
                    onDragEnd={(e) => handleDragEnd(e, index)}
                  >
                    {element.type === 'text' ? (
                      <p
                        style={{
                          color: element.color,
                          fontSize: element.fontSize,
                        }}
                      >
                        {element.content}
                      </p>
                    ) : (
                      <img
                        src={element.imageURL}
                        alt="Custom Element"
                        style={{
                          width: element.width,
                          height: element.height,
                        }}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Step 6: Customization Summary */}
        <div className="mb-4">
          <h3 className="font-semibold">Customization Summary:</h3>
          <p className="mb-2">Total Cost: ${totalCost}</p>
          <p>Selected Options: {selectedOptions.join(', ')}</p>
        </div>

        {/* Step 7: Add to Cart */}
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
          Add to Cart
        </button>
      </div>
        ) : (
          // Step 1: Product Selection
          <div>
            <p>Select a product to customize:</p>
            <button
              onClick={() => handleProductSelect('t-shirt')}
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
            >
              T-Shirt
            </button>
            <button
              onClick={() => handleProductSelect('mug')}
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
            >
              Mug
            </button>
            {/* Add more product selection buttons */}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCustomization;
