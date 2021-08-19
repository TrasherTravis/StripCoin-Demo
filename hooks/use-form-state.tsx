import React, { useState, useEffect } from "react";

type FormState = {
  eventId: number;
  event?: string;
  buttonText?: string;
  buttonEnabled?: boolean;
  buttonHandler?: string;
};

const UseFormState = () => {
  const [formState, setFormState] = useState<FormState>({ eventId: 4 });
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    if (!formState.buttonHandler) {
      setLoading(true);
      fetch("/api/transfer", {
        method: "POST",
        body: JSON.stringify(formState),
      })
        .then((response) => response.json())
        .then((res) => {
          setFormState(res.data);
          setLoading(false);
        })
        .catch((err) => {
          setErrorMsg(err);
          setLoading(false);
        });
    }
  }, [formState]);

  const beginTransfer = () => {
    setLoading(true);
    fetch("/api/transfer", {
      method: "POST",
      body: JSON.stringify(formState),
    })
      .then((response) => response.json())
      .then((res) => {
        setFormState(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setErrorMsg(err);
        setLoading(false);
      });
  };

  const mint = () => {
    setLoading(true);
    fetch("/api/transfer", {
      method: "POST",
      body: JSON.stringify(formState),
    })
      .then((response) => response.json())
      .then((res) => {
        setFormState(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setErrorMsg(err);
        setLoading(false);
      });
  };

  const closeTransfer = () => {
    setFormState({ eventId: 4 });
  };

  return {
    loading,
    errorMsg,
    formState,
    beginTransfer,
    mint,
    closeTransfer,
  };
};

export default UseFormState;
