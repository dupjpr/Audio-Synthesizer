const CloseButton = () => {

  function handleClick() {
    console.log('cerrando...');
  };

  return (
    <button onClick={(e) => handleClick(e)}>
      X
    </button>
  );
}

export default CloseButton;