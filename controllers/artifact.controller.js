// import { createArtifactService ,getArtifactsService} from "../services/artifact.service.js";

// /**
//  * POST /artifacts
//  */
// export const createArtifact = async (req, res) => {
//   try {
//     const artifact = await createArtifactService({
//       title: req.body.title,
//       content: req.body.content,
//       userId: req.user.id, // injected by auth middleware
//       media: req.file?.path

//     });

//     res.status(201).json({
//       success: true,
//       message: "Artifact created successfully",
//       artifact
//     });
//   } catch (error) {
//     res.status(400).json({
//       success: false,
//       message: error.message
//     });
//   }
// };

// export const getArtifacts = async (req, res) => {
//   try {
//     const artifacts = await getArtifactsService({
//       userId: req.user.id,
//       role: req.user.role
//     });

//     res.status(200).json({
//       success: true,
//       artifacts
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message
//     });
//   }
// };



import Artifact from "../models/artifact.js";
import { getArtifactsService } from "../services/artifact.service.js";

export const createArtifact = async (req, res) => {
  try {
    const artifact = await Artifact.create({
      title: req.body.title,
      content: req.body.content,
      author: req.user.id,
      media: req.file?.path
    });

    res.status(201).json({
      success: true,
      message: "Artifact created successfully",
      artifact
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

export const getArtifacts = async (req, res) => {
  try {
    const artifacts = await getArtifactsService({
      userId: req.user.id,
      role: req.user.role
    });

    res.status(200).json({
      success: true,
      artifacts
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};
