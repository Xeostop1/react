import PropTypes from "prop-types";
import styles from "./Button.module.css";

function Button({text}) {
    return(
        <button className={styles.btn}>
            {text+"check"}
        </button>
        ) 
};

Button.propTypes={
    text: PropTypes.string.isRequired,
}
export default Button;