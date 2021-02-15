import classes from "./Merchant.module.css";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import { Grid, makeStyles, fade, InputBase, Button } from "@material-ui/core";
import { flexbox } from "@material-ui/system";
const Merchant = (props) => {
  return (
    <div>
      <div className={classes.merchantCard}>
        <div className={classes.merchantCardHeader}>
          <h3>RETREX IO - MERCHANTS</h3>
        </div>
        <div className={classes.merchantCardBody}>
          <span className={classes.merchantCardBodySpan}>REXT</span>
          &nbsp; &nbsp; > &nbsp; &nbsp;
          <span className={classes.merchantCardBodySpan}>BTC</span>
          <br />
        </div>
      </div>
      <br />
      <div className={classes.availableRext}>
        <h3 className={classes.buyButton}>AVAILABLE REXT:375.00 </h3>

        <Button variant="outlined">BUY</Button>
      </div>
    </div>
  );
};
export default Merchant;
