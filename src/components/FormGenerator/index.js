import React from "react";
import PropTypes from "prop-types";
import ValidatedFormInputs from "./ValidatedFormInputs";

const Generator = ({
  onSubmit,
  readOnly,
  formData,
  responseData,
  topView,
  bottomView,
  showAcceptBtn
}) => {
  return (
		<div className="demo-form">
			<div
				className="jumbotron bg-default mt-2 mx-auto"
				style={{
					minHeight: "100%",
					maxWidth: "700px",
					border: "1px solid #ccc"
				}}
			>
				{topView}
				<ValidatedFormInputs
					formData={formData}
					responseData={responseData}
					onSubmit={onSubmit}
					readOnly={readOnly}
					showAcceptBtn={showAcceptBtn}

				/>
				{bottomView}
			</div>
		</div>
  );
};

Generator.propTypes = {
  formData: PropTypes.array.isRequired,
  onSubmit: PropTypes.func.isRequired,
  responseData: PropTypes.object,
  readOnly: PropTypes.bool
};

Generator.defaultProps = {
  readOnly: false
};

export default Generator;
