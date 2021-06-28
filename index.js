import React from 'react';
import { Provider } from "react-redux";
import Builder from "./src/components/FormBuilder";
import Generator from "./src/components/FormGenerator";
import store from "./src/store";

import "react-rangeslider/lib/index.css";
import './css/font-awesome.min.css';
import "./css/bootstrap.min.css";
import "./src/App.scss";

const FormBuilder = ({ onSubmit, items,submitBtnText,builderTitle,topView }) => (
	<Provider store={store}>
    <Builder 
      onSubmit={onSubmit} 
      items={items} 
	  submitBtnText={submitBtnText}
	  builderTitle={builderTitle}
	  topView={topView}
    />
  </Provider>
)

const FormGenerator = ({ 
	formData, 
	responseData, 
	readOnly, 
	onSubmit ,
	topView,
	bottomView,
	showAcceptBtn
}) => (
	<Provider store={store}>
		<Generator 
			formData={formData} 
			responseData={responseData} 
			readOnly={readOnly} 
			onSubmit={onSubmit} 
			topView={topView}
			bottomView={bottomView}
			showAcceptBtn={showAcceptBtn}
		/>
	</Provider>
)

export { FormBuilder, FormGenerator }