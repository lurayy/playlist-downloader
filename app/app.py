'''
Starting point for app.
'''
import eel
import pafy
from pytube import Playlist as get_video_list

# eel.init('/home/lurayy/projects/youtube_playlist_downloader/app/ui')
eel.init('./ui')


@eel.expose
def get_videos_link(url=None):
    print("asdf", url)
    # url = "https://www.youtube.com/playlist?list=PL-osiE80TeTsqhIuOqKhwlXsIBIdSeYtc"
    # print(url)
    # playlist = get_video_list(url)
    # print(playlist)
    return "hew haw"


eel.start('index.html')
