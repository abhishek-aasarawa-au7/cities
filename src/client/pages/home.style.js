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
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  viewButton: {
    marginLeft: "20%",
    marginTop: "4%",
  },
}));

export default useStyles;
