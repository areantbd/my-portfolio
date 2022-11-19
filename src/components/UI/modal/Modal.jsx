import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { LangContext } from '../../../contexts/LangContext';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function ChildModal() {
  const lang = React.useContext(LangContext)
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return lang?.lang === "esp" ? (
    <React.Fragment>
      <Button onClick={handleOpen}>ir al proyecto</Button>
      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 300 }}>
          <h2 id="child-modal-title">Si insistes... </h2>
          <p id="child-modal-description">
            Puedo redireccionarte al inicio de la web de nuevo.
          </p>
          <div className='d-flex justify-content-between align-items-center'>
            <a href='https://ivanrf.netlify.app/' className='text-decoration-none'>IR</a>
            <Button onClick={handleClose}>me quedo aquí</Button>
          </div>
        </Box>
      </Modal>
    </React.Fragment>
  ) : (
    <React.Fragment>
      <Button onClick={handleOpen}>go to the project</Button>
      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 300 }}>
          <h2 id="child-modal-title">If you insist... </h2>
          <p id="child-modal-description">
            I can redirect you to this website.
          </p>
          <div className='d-flex justify-content-between align-items-center'>
            <a href='https://ivanrf.netlify.app/' className='text-decoration-none'>GO</a>
            <Button onClick={handleClose}>I stay here</Button>
          </div>
        </Box>
      </Modal>
    </React.Fragment>
  )
}

export default function BasicModal() {
  const lang = React.useContext(LangContext)
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return lang?.lang === "esp" ? (
    <div>
      <Button  className='text-decoration-underline text-primary' type='text' onClick={handleOpen}>Ir al proyecto.</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" className='text-center' >
            ¿En serio?
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }} className='text-center' >
            ¿Acabas de dar click a un enlace para visitar esta misma web?
          </Typography>
          <ChildModal />
        </Box>
      </Modal>
    </div>
  ) : (
    <div>
      <Button  className='text-decoration-underline text-primary' type='text' onClick={handleOpen}>Go to the project.</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" className='text-center' >
            Really?
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }} className='text-center' >
          Did you just click on a link to visit this website?
          </Typography>
          <ChildModal />
        </Box>
      </Modal>
    </div>
  )
}