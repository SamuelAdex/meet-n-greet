import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import {useParams} from 'react-router-dom'
import { Util } from '../helpers/util';

const util = new Util()

const MeetingSpace = () => {
    const {id} = useParams()

    let isValidId = id.split("-");
    if (isValidId.length !== 3) {
        util.Alert("error", "The meeting id is invalid")
        return window.location = "https://meet-n-greet.netlify.app"
    }

    useEffect(() => {
        if(window.JitsiMeetExternalAPI){
            startMeeting()
        } else {
            util.Alert("error", "JitsiMeetExternalAPI not Loaded")
        }
    })

        function startMeeting() {
        const domain = 'meet.jit.si';
        const options = {
            roomName: id,
            width: "100vw",
            height: "100vh",
            parentNode: document.getElementById('meet'),
            configureOverwrite: {
                disableInviteFunctions: true,
                dynamicBrandingUrl: "",
                hideConferenceSubject: true,
                disableThirdPartyRequests: true,
                defaultRemoteDisplayName: "MEET-n-GREET",
                disabledSounds: [
                    'REACTION_SOUND'
                ],
                autoKnockLobby: true,
                toolbarButtons: [
                    'camera',
                    'chat',
                    'closedcaptions',
                    'desktop',
                    'download',
                    'etherpad',
                    'fullscreen',
                    'hangup',
                    'livestreaming',
                    'microphone',
                    'mute-everyone',
                    'mute-video-everyone',
                    'participants-pane',
                    'profile',
                    'raisehand',
                    'recording',
                    'security',
                    'select-background',
                    'settings',
                    'shareaudio',
                    'share-video',
                    'shortcuts',
                    'toggle-camera',
                    '__end'
                ]
            },
            interfaceConfigOverwrite: {
                DISABLE_JOIN_LEAVE_NOTIFICATIONS: true,
                APP_NAME: 'MEET-n-GREET',
                MOBILE_APP_PROMO: false,
                SHOW_JITSI_WATERMARK: false,
                HIDE_DEEP_LINKING_LOGO: true,
                NATIVE_APP_NAME: 'MEET-n-GREET',
                DEFAULT_BACKGROUND: '#06141D',
                JITSI_WATERMARK_LINK: "https://github.com/SamuelAdex/meet-n-greet",
                SHOW_CHROME_EXTENSION_BANNER: false,
                VIDEO_QUALITY_LABEL_DISABLED: true,
                SETTINGS_SECTIONS: ['devices', 'moderator', 'profile', 'sounds'],
            }            
        }

        let api = new window.JitsiMeetExternalAPI(domain, options);

        api.addEventListeners({
            participantLeft: handleClose,
        })

        function handleClose() {
            window.location = 'https://meet-n-greet.netlify.app/'
        }
    }


  return (
    <Section id="meet"></Section>
  )
}

export default MeetingSpace

const Section = styled.section`
    iframe{
        width:100vw;
        height: 100vh;
    }
`;