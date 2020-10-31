import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  main: {
    textAlign: "center",
    color: "inherit",
    width: "100%",
  },
  input: {
    padding: theme.spacing(0, -10),
  },
}));

export default useStyles;
