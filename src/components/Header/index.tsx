import HeaderBackground from '../../assets/resource/background/header.svg';

const index = () => {
  return (
    <header
      style={{
        background: `url(${HeaderBackground}),radial-gradient(circle at 50.5% 52%,#f0afef,#b977c1 40px,#593173,#20164d 195px)`,
        width: '100%',
        height: '550px',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    />
  );
};

export default index;
