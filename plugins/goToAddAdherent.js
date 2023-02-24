export default (context, inject) => {
    const goToAddAdherent = () => {
      return $router.push('/adherents/addAdherent');
    }
    inject('goToAddAdherent', goToAddAdherent)
    context.$goToAddAdherent = goToAddAdherent
}