import React, { useState } from "react";
import {
  Modal,
  IconButton,
  Box,
  Typography,
  Backdrop,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import FullscreenIcon from "@mui/icons-material/Fullscreen";

const Certificate = ({ ImgSertif }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box component="div" sx={{ width: "100%" }}>
      {/* Thumbnail Container */}
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 2,
          boxShadow: "0 8px 16px rgba(0,0,0,0.15)",
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          "&:hover": {
            transform: "translateY(-5px)",
            boxShadow: "0 12px 24px rgba(0,255,255,0.3)",
            "& .overlay": { opacity: 1 },
            "& .hover-content": { transform: "translate(-50%, -50%)", opacity: 1 },
            "& .certificate-image": { filter: "contrast(1.1) brightness(1.05) saturate(1.2)" },
          },
        }}
      >
        {/* Certificate Image */}
        <Box sx={{ position: "relative" }}>
          <img
            className="certificate-image"
            src={ImgSertif}
            alt="Certificate"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              objectFit: "cover",
              filter: "contrast(1.05) brightness(0.95) saturate(1.1)",
              transition: "filter 0.3s ease",
            }}
            onClick={handleOpen}
          />
        </Box>

        {/* Hover Overlay */}
        <Box
          className="overlay"
          sx={{
            position: "absolute",
            inset: 0,
            opacity: 0,
            background: "linear-gradient(135deg, rgba(0,255,255,0.2), rgba(100,149,237,0.2), rgba(138,43,226,0.2))",
            transition: "all 0.3s ease",
            cursor: "pointer",
            zIndex: 2,
          }}
          onClick={handleOpen}
        >
          {/* Hover Content */}
          <Box
            className="hover-content"
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -60%)",
              opacity: 0,
              transition: "all 0.4s ease",
              textAlign: "center",
              width: "100%",
              color: "#fff",
            }}
          >
            <FullscreenIcon
              sx={{ fontSize: 40, mb: 1, filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.4))" }}
            />
            <Typography
              variant="h6"
              sx={{ fontWeight: 600, textShadow: "0 2px 4px rgba(0,0,0,0.4)" }}
            >
              View Certificate
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Modal */}
      <Modal
        open={open}
        onClose={handleClose}
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 300,
          sx: {
            backgroundColor: "rgba(0,0,0,0.95)",
            backdropFilter: "blur(6px)",
          },
        }}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center", margin: 0, padding: 0 }}
      >
        <Box
          sx={{
            position: "relative",
            width: "auto",
            maxWidth: "90vw",
            maxHeight: "90vh",
            m: 0,
            p: 0,
            outline: "none",
          }}
        >
          {/* Close Button */}
          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 16,
              top: 16,
              color: "#fff",
              bgcolor: "rgba(0,255,255,0.3)",
              zIndex: 1,
              padding: 1,
              "&:hover": { bgcolor: "rgba(0,255,255,0.5)", transform: "scale(1.1)" },
            }}
            size="large"
          >
            <CloseIcon sx={{ fontSize: 24 }} />
          </IconButton>

          {/* Modal Image */}
          <img
            src={ImgSertif}
            alt="Certificate Full View"
            style={{ display: "block", maxWidth: "100%", maxHeight: "90vh", margin: "0 auto", objectFit: "contain" }}
          />
        </Box>
      </Modal>
    </Box>
  );
};

export default Certificate;
