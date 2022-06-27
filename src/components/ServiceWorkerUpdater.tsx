import * as React from "react";
import * as serviceWorkerRegistration from "../serviceWorkerRegistration";

import { Alert, Button, Snackbar } from "@mui/material";

export function ServiceWorkerUpdater() {
  const [showReload, setShowReload] = React.useState(false);
  const [waitingWorker, setWaitingWorker] =
    React.useState<ServiceWorker | null>(null);

  const onSWUpdate = (registration: ServiceWorkerRegistration) => {
    setShowReload(true);
    setWaitingWorker(registration.waiting);
  };

  const reloadPage = () => {
    waitingWorker?.postMessage({ type: "SKIP_WAITING" });
    setShowReload(false);
    window.location.reload();
  };

  React.useEffect(() => {
    serviceWorkerRegistration.register({ onUpdate: onSWUpdate });
  }, []);

  return (
    <Snackbar
      open={showReload}
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
