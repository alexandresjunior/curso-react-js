const AlertModal = () => {
  return (
    <div
      class="modal fade"
      id="alertModal"
      tabindex="-1"
      aria-labelledby="alertModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-body bg-blue px-5">
            <p className="text-center fw-bolder mt-3 mb-4">ATENÇÃO</p>
            <p className="text-center fw-bold mb-4">
              Esta ação irá excluir um registro do banco de dados. Deseja
              prosseguir?
            </p>
            <div className="row d-flex justify-content-center mb-4">
              <div className="col-6">
                <button
                  type="button"
                  class="btn btn-sasb-green-dark w-100"
                  data-bs-dismiss="modal"
                  onClick={() => {}}
                >
                  SIM
                </button>
              </div>
              <div className="col-6">
                <button
                  type="button"
                  class="btn btn-sasb-white-dark w-100"
                  data-bs-dismiss="modal"
                >
                  CANCELAR
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlertModal;
