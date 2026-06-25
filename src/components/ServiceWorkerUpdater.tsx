import { useRegisterSW } from "virtual:pwa-register/react";
import { Alert, Button, Snackbar } from "@mui/material";

export function ServiceWorkerUpdater() {
  const {
    needRefresh: [needRefresh],
    updateServiceWorker,
  } = useRegisterSW();

  const reloadPage = () => {
    updateServiceWorker(true);
  };

  return (
    <Snackbar
      open={needRefresh}
      onClick={reloadPage}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
    >
      <Alert
        severity="info"
        sx={{ width: "100%" }}
        action={
          <Button color="inherit" size="small" onClick={reloadPage}>
            Reload
          </Button>
        }
      >
        A new version is available!
      </Alert>
    </Snackbar>
  );
}
